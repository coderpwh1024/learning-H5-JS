<%--
  Created by IntelliJ IDEA.
  User: 彭文浩
  Date: 2017/11/8
  Time: 22:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
  String username = request.getParamter("username");
  String content = request.getParamter("content");
    response.setContentType("text/xml");
    out.println("<?xml version='1.0' encoding='UTF-8'?>");
    out.println("<comments>");
    out.println("<comment username='"+username+"'>");
    out.println("<content>"+content+"</content>");
    out.println("</comment>");
    out.println("</comments>");

%>

<html>
<head>
    <title>Title</title>
</head>
<body>

</body>
</html>
