import "./App.css";
import users from "./data.js";

function App() {
    return (
        <div className="container">
            {users.map((user) => (
                <div className="card">
                    <div
                        className="card--header"
                        style={{
                            backgroundImage: `url(${user.background_url})`,
                        }}
                    />
                    <img
                        className="avatar"
                        src={user.avatar_url}
                        alt="avatar"
                    />
                    <div className="card--body">
                        <div>
                            <p className="text-header">{user.name}</p>
                            <p className="text-sub">{user.desc}</p>
                            <button className="btn">FOLLOW</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default App;
