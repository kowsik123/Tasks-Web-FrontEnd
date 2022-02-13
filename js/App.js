$.ajaxSetup({
    url: "api",
    method: "post",
    error: ()=>{ ReactDOM.render(<ServerError />, document.getElementById('root') ) }
});

let isGuest = false;
let taskGroupManager = false;
const credentialId = getCookie( "credentialId" );
if( credentialId ) {
    if ( credentialId==="guest" ) isGuest=true;
    taskGroupManager = new TaskGroupManager()
    ReactDOM.render(<App />, document.getElementById('root'))
}
else ReactDOM.render( <Login /> , document.getElementById('root') )

function getCookie(cname) {
  let name = cname + "="
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1)
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
  }
  return null
}

function App() {
    console.log("app rendered");
    return (
        <>
            <TitleBar />
            <Content />
            <FloatingButton />
        </>
    )
}
