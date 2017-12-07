---
published: true
layout: post
title: 大架构的模型穿越
author: punkmonday
tags:
  - ddd
categories:
  - ddd
---
不同的上下文(context)模型协作，举个例子，就类似一个用户账号（userID),在不同的游戏场景play,进入中世纪，同样的user，扮演的是一个骑士(类型class)，进入未来世界，同样的user，扮演的是机器人，那么在边界之间该如何穿越呢，这里就在进入不同的时空隧道时，给一个函数入口F(String userID),通过这个函数，就进入到了不同的世界，这就需要设计师在设计接口的时候统一留一个标识作为USER的记录，单体结构下可以就是一个字符串，微服务就是一个RESTFUL接口，最终都是将这个userID变为自己边界内的一个领域模型（在中世纪领域，是骑士，在未来世界，是机器人）来完成不同领域的业务逻辑（PLAY）


```java
//一个应用服务，把传递过来的anAuthorId转变为Forum领域的Author
public class ForumApplicationService { 
	public void startExclusiveForumWithDiscussion(
            String aTenantId,
            String anExclusiveOwner,
            String aCreatorId,
            String aModeratorId,
            String anAuthorId,
            String aForumSubject,
            String aForumDescription,
            String aDiscussionSubject,
            ForumCommandResult aResult) {
    	Tenant tenant = new Tenant(aTenantId);

        String forumId =
                this.forumQueryService()
                    .forumIdOfExclusiveOwner(
                            aTenantId,
                            anExclusiveOwner);

        Forum forum = null;

        if (forumId != null) {
            forum = this.forumRepository()
                        .forumOfId(
                                tenant,
                                new ForumId(forumId));
        }
      
      if (forum == null) {
            forum = this.startNewForum(
                    tenant,
                    aCreatorId,
                    aModeratorId,
                    aForumSubject,
                    aForumDescription,
                    anExclusiveOwner);
        }

        String discussionId =
                this.discussionQueryService()
                    .discussionIdOfExclusiveOwner(
                            aTenantId,
                            anExclusiveOwner);

        Discussion discussion = null;

        if (discussionId != null) {
            discussion = this.discussionRepository()
                             .discussionOfId(
                                     tenant,
                                     new DiscussionId(discussionId));
        }

        if (discussion == null) {
            Author author =
                    this.collaboratorService().authorFrom(tenant, anAuthorId);
            discussion =
                    forum.startDiscussionFor(
                            this.forumIdentityService(),
                            author,
                            aDiscussionSubject,
                            anExclusiveOwner);

            this.discussionRepository().save(discussion);
        }

        if (aResult != null) {
            aResult.resultingForumId(forum.forumId().id());
            aResult.resultingDiscussionId(discussion.discussionId().id());
        }
    }
}
```
