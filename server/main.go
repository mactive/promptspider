package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// 服务前端静态文件
	r.Static("/assets", "./dist/assets")
	r.StaticFile("/", "./dist/index.html")

	// API 路由
	api := r.Group("/api")
	{
		api.GET("/hello", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "Hello from Go!",
			})
		})
	}

	r.Run(":6789")
}
