package main

import "testing"

func TestGreeting(t *testing.T) {
	cases := []struct {
		name  string
		input string
		want  string
	}{
		{"default on empty", "", "yo, from mr hulla!"},
		{"default on blank", "   ", "yo, from mr hulla!"},
		{"greets a given name", "ada", "yo, from ada!"},
		{"trims surrounding space", "  ada  ", "yo, from ada!"},
	}

	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			if got := greeting(tc.input); got != tc.want {
				t.Errorf("greeting(%q) = %q, want %q", tc.input, got, tc.want)
			}
		})
	}
}
