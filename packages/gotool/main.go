package main

import (
	"fmt"
	"os"
	"strings"
)

// greeting mirrors mr-hulla-core's hello(): blank input falls back
// to the default name so `mr-hulla-go` and `mr-hulla-go ""` agree.
func greeting(name string) string {
	if strings.TrimSpace(name) == "" {
		name = "mr hulla"
	} else {
		name = strings.TrimSpace(name)
	}
	return fmt.Sprintf("yo, from %s (go)!", name)
}

func main() {
	name := ""
	if len(os.Args) > 1 {
		name = os.Args[1]
	}
	fmt.Println(greeting(name))
}
