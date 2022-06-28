import styled from "@emotion/styled";

interface TextProps {
    color?: string
    marginBottom?: string
    fontWeight?: string
    fontSize?: string
    lineHeight?: string
    textAlign?: string
}
export const Text = styled('p')<TextProps>`
	font-family: 'BlinkMacSystemFont', serif;
	font-style: normal;
	font-weight: ${(props) => props.fontWeight ?? 400};
	font-size: ${(props) => props.fontSize ?? '14px'};
	line-height: ${(props) => props.lineHeight ?? '22px'};
	text-align: ${(props) => props.textAlign ?? 'center'};
	width: 100%;
	margin: auto 0;
	color: ${(props) => props.color ?? 'black'};
	margin-bottom: ${(props) => props.marginBottom};
    text-wrap: none;
`