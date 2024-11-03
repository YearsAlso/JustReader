import {Footer, Header} from "antd/es/layout/layout";


const LayoutWrapper = ({children}: any) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default LayoutWrapper;
