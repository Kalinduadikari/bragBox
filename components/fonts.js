import { Global } from "@emotion/react";

const Fonts = () => (
    <Global
    styles={`
    @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap");
    `}
    />
)

export default Fonts;