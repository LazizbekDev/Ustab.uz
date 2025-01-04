import "./loader.css";

export const Loader = () => (
    <div className="loader-container">
        <div className="scene">
            <div className="shadow" />
            <div className="jumper">
                <div className="spinner">
                    <div className="scaler">
                        <div className="loader">
                            <div className="cuboid">
                                <div className="cuboid__side" />
                                <div className="cuboid__side" />
                                <div className="cuboid__side" />
                                <div className="cuboid__side" />
                                <div className="cuboid__side" />
                                <div className="cuboid__side" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
