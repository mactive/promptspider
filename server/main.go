package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// 服务前端静态文件
	r.Static("/static", "../frontend/build/static")
	r.StaticFile("/", "../frontend/build/index.html")
	r.StaticFile("/favicon.ico", "../frontend/build/favicon.ico")

	// API 路由
	api := r.Group("/api")
	{
		api.GET("/hello", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "Hello from Go!",
			})
		})
	}

	r.Run(":8080")
}
