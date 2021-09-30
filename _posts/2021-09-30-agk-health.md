---
published: true
---
# 安高科健康码接口文档
## 1 简介
### 1.1 概述 

本⽂档主要描述接⼝规范。 

闸机通⾏需要⽤到的接⼝：**健康码解码接⼝**，调⽤后可以查询当前群众的健康码状态。

### 1.2  术语表

|  术语   | 说明  |
|  ----  | ----  |
| API_ROOT  | http://52.130.80.202:12700/center/api |

## 2 API概览
### 2.1 相关接口

|  接口名称   | 路径  |
|  ----  | ----  |
| 获取健康码  | <API_ROOT>/health/code |
| 健康码解码接口  | <API_ROOT>/health/decode |

## 3  开发指引
### 3.1 配置信息

请联系对接人员获取

- appId
- secretKey

### 3.2  接入流程

sign需要加密,加密java参考:

~~~
    @Test
    public void centerFaceIdApiCompare() throws InterruptedException {
        for (int i=0;i<2;i++){
            String url = "http://localhost:8080/center/api/live/compare";
            TreeMap<String, Object> params = new TreeMap<>();
            params.put("appId", "appId");
            params.put("secretKey", "secretkey");
            params.put("timestamp", String.valueOf(System.currentTimeMillis()));
            if(i==0){
                params.put("code",centerFaceIdApiCode());
                params.put("type",0);
            }else{
                params.put("code",centerFaceIdApiActionSequence());
                params.put("type",1);
            }
            params.put("sign", sign(params));
            //加图片
            params.put("image",FileUtil.file("E:\\zyh.jpg"));
            //加视频
            params.put("video",FileUtil.file("E:\\zyh.mp4"));
            String s = HttpUtil.post(url, params);
            System.out.println(s);
            Thread.sleep(60000);
        }
    }

	private static String sign(Map<String, Object> params) {
        StringBuilder sb = new StringBuilder();
        for (Map.Entry<String, Object> entry : params.entrySet()) {
            sb.append(entry.getKey());
            sb.append("=");
            sb.append(entry.getValue());
            sb.append("&");
        }
        return DigestUtils.sha256Hex(sb.toString()
        .substring(0, sb.toString().length() - 1)).toUpperCase();
    }
~~~

### 3.3  省市区编码
 采⽤2020省市区国标编码 
### 3.4  证件类型编码
| 证件类型编码 | 证件类型名称 |
|  ----  | ----  |
|  10  | 居民身份证  |
| 14 | 港澳居民来往内地通行证 |
| 15 | 台湾居民来往大陆通行证 |
| 16 | 一次性台湾居民来往大陆通行证 |
| 20 | 护照 |
| 34 | 外国人永久居留证 |
| 99 | 其他 | 

## 4  接口列表
### 4.1  获取健康码
接口地址
~~~
<API_ROOT>/health/code
~~~
请求方式
~~~
post
~~~
请求参数

| 字段 | 必填 | 类型 | 描述 |
| ---- | ---- | ---- | ---- |
| appId | 是 | String | appId |
| secretKey | 是 | String | secretKey |
| sign | 是 | String | sign |
| timestamp | 是 | String | 时间戳 |
| certificate_id | 是 | String | 证件号 |
| certificate_type | 是 | String | 参见3.4证件类型编码 |
| name | 是 | String | 姓名 |

返回结果

| 参数名 | 必 选 | 类型 | 范 围  | 说明 | 字典 |
| ---- | ---- | ---- | ---- | ---- | ----|
| report_date | 是 | String |   | 申报时间,为空则没有申报过  |  |
| report_valid_date | 是 | String |   | 申报信息有效期时间 YYYY-MM-DD HH:mm:ss  |  |
| report_expired | 是 | Bool |   | 申报是否过期  |  |
| risk_assessment_grade | 是 | String |   | 健康码⻛险等级   | 00 绿码 01 ⻩码 10 红 码  |
| reason | 是 | String |   | ⻛险等级原因（⻩、红码）|   |
| guide | 是 | String |  | ⻛险等级引导建议 | |
| code_content | 是 | String |  | 健康码字符串(⽤于显⽰⼆维码) | |
| code_expire_time | 是 | String | | 码失效时间 YYYY-MM-DD HH:mm:ss | |

### 4.2  健康码解码接⼝

接口地址

~~~
<API_ROOT>/health/decode
~~~

请求方式

~~~
post
~~~

请求参数

| 字段 | 必填 | 类型 | 描述 |
| ---- | ---- | ---- | ---- |
| appId | 是 | String | appId |
| secretKey | 是 | String | secretKey | 
| sign | 是 | String | sign |
| timestamp | 是 | String | 时间戳 |
| code_content | 是 | String | 健康码码串

返回结果

| 参数名 | 必 选 | 类型 | 范 围  | 说明 | 字典 |
| ---- | ---- | ---- | ---- | ---- | ----|
| name  |  是 | String | | 脱敏的字符串 | |  
| phone |  是 | String | | 脱敏的字符串 | |
| certificate_id | 是 | Bool || 脱敏的字符串 ||
| certificate_type | 是 | String | | | 参见3.4证件类型编码 |
| risk_assessment_grade  | 是 | String | | ⻛险等级 | 00绿码 01 ⻩码 10 红 码 |
| reason | 是 | String | | ⻛险等级原因（⻩、红码） ||
| guide  | 是 | String | | ⻛险等级引导建议  ||
| report_date | 是 | String | | 申报时间,为空则没有申报过  ||
| report_valid_date | 是 | String || 申报信息有效期时间 YYYY-MM-DD HH:mm:ss ||
| report_expired | 是 | Boolean | | 申报或打卡是否过期 || 
| certificate_token | 是 | String | | 加密后的报⽂ ||

健康码过期返回结果

~~~
{
 "errcode": 0,
 "errmsg": "SUCCESS",
 "data": {
   "qrcode_expired": true, // 健康码是否过期
     "report_expired": false // 申报状态是否过期
 }
}
~~~
