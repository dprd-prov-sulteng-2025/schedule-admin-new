import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const LoginFeat = () => {
  return (
    <form className="flex flex-col gap-6">
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Selamat Datang 👋</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Masuk untuk bisa mengatur penjadwalan rapat.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Masukkan Email</FieldLabel>
          <Input id="email" type="email" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Masukkan Kata Sandi</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Lupa password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit" className="bg-yellow-300 text-yellow-900 hover:bg-yellow-400">Login</Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Belum punya akun?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}

export default LoginFeat