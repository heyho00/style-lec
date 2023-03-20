import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}
	
	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}
	
	html {
		font-size: 62.5%; // 시력이 안좋은 유저의 경험을 좋게하기 위해..
        // 폰트 크기를 바꾸면 따라서 대응이 됨
	}
	
	body {
		font-size: 1.6rem;
		background: ${(props) => props.theme.colors.background};
		color: ${(props) => props.theme.colors.background};
	}
	
	:lang(ko) {
		h1, h2, h3 {
			word-break: keep-all;
            /* 안녕하세
            요 */
            /* 이런 띄어쓰기 개선 */
		}
	}
`;

export default GlobalStyle;
