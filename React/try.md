<h2>Two way binding</h2>
Doing things differntly:-
    //const [username,setUsername]=useState("")
    //<input aria-label="Phone number, username, or email" aria-required="true" autocapitalize="off" autocorrect="off" maxlength="75" class="input" dir="" type="text" value={username} name="username" onChange={(e)=>{
                                // console.log(e.target.value);
                                setUsername(e.target.value)
                                }}>