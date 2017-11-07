<%--
  Created by IntelliJ IDEA.
  User: coderpwh
  Date: 2017/11/7
  Time: 14:05
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>

<html>
<head>
    <title>jsp页面</title>
</head>
<body>
<%
    String username = request.getParameter("username");
    String content = request.getParameter("content");
    System.out.println("<div class='comment'><h6> "+username+" :</h6><p class='para'> "+content+" </p></div>");
%>
</body>
</html>
