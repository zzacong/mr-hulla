package main

import "testing"

func TestGreeting(t *testing.T) {
	cases := []struct {
		name  string
		input string
		want  string
	}{
		{"default on empty", "", "yo, from mr hulla (go)!"},
		{"default on blank", "   ", "yo, from mr hulla (go)!"},
		{"greets a given name", "ada", "yo, from ada (go)!"},
		{"trims surrounding space", "  ada  ", "yo, from ada (go)!"},
	}

	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			if got := greeting(tc.input); got != tc.want {
				t.Errorf("greeting(%q) = %q, want %q", tc.input, got, tc.want)
			}
		})
	}
}
