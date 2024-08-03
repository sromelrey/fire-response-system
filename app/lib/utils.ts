'use server'
import { SignJWT, jwtDecrypt, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const secretKey = process.env.AUTH_SECRET
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
  try {
    const jwt = await new SignJWT(payload.userData)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1 day from now")
      .sign(key);

    return jwt;
  } catch (error) {
    console.log({ error });
    return error;
  }
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });

  return payload;
}

export async function getSession() {
  const session = await cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}
