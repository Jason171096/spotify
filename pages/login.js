import { getProviders, signIn } from "next-auth/react"

const Login = ({providers}) => {
  return (
    <div>
      <img className="w-5 h-5" src="https://links.papareact.com/9xl" />
      {Object.values(providers).map((provider) => {
          {provider.name}
      })}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}