package main

import (
	log "github.com/sirupsen/logrus"
	"github.com/websocket-Golang.git/internal/wsserver"
)

const (
	addr = "API_addres :8080"
)

func main() {
	wsSrv := wsserver.NewWsServer(addr)
	log.Info("Started ws server")
	if err := wsSrv.Start(); err != nil {
		log.Errorf("Error with ws server: %v", err)
	}
}
