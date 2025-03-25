package wsserver

type wsMessage struct {
	IPSddress string `json:"address"`
	Message   string `json:"message"`
	Time      string `json:"time"`
} //
