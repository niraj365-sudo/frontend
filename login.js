
            <div className={"logIn_body"}>
               
                <form className={"logIn_form"} onSubmit={this.onSubmit}>
                    <div><label>Email* </label> <br/>
                    <input type={"email"} value={email} id={"email"} placeholder={"Enter your email"}
                        onChange={e => this.setState({ email: e.target.value })} /></div>
                    <div>
                    <label>Password*  </label><br/>
                    <input type={"password"} value={password} id={"password"} placeholder={"Enter your password"}
</div>
                    <label className={"button"}>
                        <input type={"checkbox"} checked={rememberMe} className={"rememberMe"}
                            onChange={e => this.setState({ rememberMe: e.target.checked })} />
                       <h6>RememberMe </h6> 
                        </label>
                        <button type='submit' id={"logIn-button"}> LOG IN</button>
                </form>
            </div>