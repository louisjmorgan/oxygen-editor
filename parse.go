package parse

import (
	"strings"

	"github.com/lukeellisbower/oxygen.market/consts"
	"github.com/lukeellisbower/oxygen.market/inter"
	"github.com/lukeellisbower/oxygen.market/node"
)

type token struct {
	y     int
	x     int
	value string
}

// ParseRoot is used for parsing hand written source code, adds a super root node to all lines
func ParseRoot(code string) inter.Node {
	return node.NewNode(consts.Root, ParseNodes(code))
}

func ParseNodes(code string) inter.Nodes {
	nodes := node.NewNodes()
	tokens := lex(code)
	for i, t := range tokens {
		if t.x == 0 {
			node := node.NN(t.value)
			parseRecursive(node, t, tokens, i+1)
			nodes.SetNode(node)
		}
	}
	return nodes
}

func parseRecursive(superNode inter.Node, superToken *token, tokens []*token, index int) {
	for i := index; i < len(tokens); i++ {
		tok := tokens[i]
		if tok.x <= superToken.x {
			break
		}
		if tok.x == superToken.x+1 {
			sub := node.NN(tok.value)
			superNode.SetNode(sub)
			parseRecursive(sub, tok, tokens, i+1)
		}
	}
}

func lex(code string) []*token {
	lines := strings.Split(code, "\n")
	var tokens []*token
	for i, line := range lines {
		y := i
		x := countFirstRepeatedRunes(&line, '\t')
		value := strings.Trim(line, "\t\n\r") // strip tabs and newlines but not sourounding spaces (for ui text field entry)
		if value != "" {                      // don't parse empty lines
			tokens = append(tokens, &token{y, x, value})
		}
	}
	return tokens
}

func countFirstRepeatedRunes(s *string, r rune) int {
	x := 0
	for _, c := range *s {
		if c != r {
			break
		}
		x++
	}
	return x
}

func (n *Node) String() string {
	return n.Serialise(0, "")
}

func (n *Node) Serialise(x int, str string) string {
	indent := strings.Repeat("\t", x)
	str += indent + n.NodeHeader.String() + "\n"
	n.ForEach(func(i int, sn inter.Node) {
		str = sn.Serialise(x+1, str)
	})
	return str
}