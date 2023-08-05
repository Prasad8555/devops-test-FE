const App = () => {
    let page = 'No Subdomain'

    const host = window.location.host; // gets the full domain of the app
    const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);
    if (arr.length > 0) page = arr[0];

    return (
        <div style={{fontSize: '20px', backgroundColor: `${page === 'No Subdomain' ? "#fff" : "#000"}`, fontWeight: '600', color: `${page === 'No Subdomain' ? "#000" : "#fff"}`, height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>{`Subdomain Name = ${page === null ? 'Landing Page' : page.toUpperCase()}`}</div>
    )
}

export default App