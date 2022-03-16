import React from "react";

const BgShape = () => {
    return (
        <>
            <div>
                <div className="fixed -z-10 opacity-20 -right-96 -bottom-20 rotate-90" style={{ width: "700px" }}>
                    <img src="https://www.norderbergs.com/storage/2020/09/background-shapes-png-1-Images-PNG-Transparent.png" className="w-full h-full" />
                </div>
                <div className="fixed -z-10 opacity-20 -left-96 -top-20 -rotate-180" style={{ width: "700px" }}>
                    <img src="https://www.norderbergs.com/storage/2020/09/background-shapes-png-1-Images-PNG-Transparent.png" className="w-full h-full" />
                </div>
            </div>
        </>
    )
}

export default BgShape