import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card'
import LoginForm from './LoginForm'

export default function LoginCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  )
}
