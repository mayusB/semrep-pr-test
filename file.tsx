import { useRouter } from 'next/router';

export default function Login(props: Props) {
  const router = useRouter()

  const returnTo = Array.isArray(router.query.returnTo)
  ? router.query.returnTo[0]
  : router.query.returnTo;

  const { abc } = router.query

  return (
    <div>
    // ruleid: react-nextjs-router-push
    <a onClick={() => router.replace(`${returnTo}`)}>Click to XSS 1</a>
    // ruleid: react-nextjs-router-push    
    <a onClick={() => router.replace(abc)}>Click to XSS 1</a>
    // ruleid: react-nextjs-router-push
    <a onClick={() => router.replace(useRouter().query.returnTo[0])}>Click to XSS 1</a>
    // ruleid: react-nextjs-router-push
    <a onClick={() => router.push(returnTo)}>Click to XSS 1</a>
    // ruleid: react-nextjs-router-push
    <a onClick={() => router.push(router.query.returnTo[0])}>Click to XSS 1</a>
    // ruleid: react-nextjs-router-push
    <a onClick={() => router.push(useRouter().query.returnTo[0])}>Click to XSS 1</a>
    // ok: react-nextjs-router-push
    <a onClick={() => router.push('#'+returnTo)}>Click to XSS 1</a>
      // ok: react-nextjs-router-push
    <a onClick={() => router.push(`#${router.query.returnTo[0]}`)}>Click to XSS 1</a>
    // ok: react-nextjs-router-push
    <a onClick={() => router.push('#'+useRouter().query.returnTo[0])}>Click to XSS 1</a>
    // ok: react-nextjs-router-push
    <a onClick={() => router.push(a)}>Click to XSS 1</a>
    </div>
  )


}

export default function Home() {

  const router = useRouter();
  // todo: later work
  return <span onClick={() => router.push(document.location.hash.substr(1))}>Click to XSS 1</span>

}
