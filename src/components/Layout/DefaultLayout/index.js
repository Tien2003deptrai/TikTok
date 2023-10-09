import Header from "~/components/Layout/components/Header";
import Sidbar from "./SideBar";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidbar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;