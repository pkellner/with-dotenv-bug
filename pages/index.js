import Link from 'next/link'

export default (req) => {
    const str = "TEST";
    return <div>
        <Link href='/about'><a>About</a></Link>
        <br/>
        process.env.TEST:{process.env.TEST}<br/>
        process.env["TEST"]:{process.env["TEST"]}<br/>
        process.env[str]:{process.env[str]}<br/>

    </div>;



}
