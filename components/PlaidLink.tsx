import { createLinkToken, exchangePublicToken } from '@/lib/action/user.actions'
import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const [token, setToken] = useState('')
    const router = useRouter()
    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user);
            setToken(data?.linkToken)
            console.log("Link token:", data);
        }
        getLinkToken();
    }, [user])
    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
        await exchangePublicToken({
            publicToken: public_token,
            user,
        })

        router.push('/');
    }, [user])//-> it should get recall when the user changed
    const config: PlaidLinkOptions = {
        token,
        onSuccess,
    }
    const { open, ready } = usePlaidLink(config);
    if (!ready) console.log("Current ready state", ready);
    return (
        <>
            {variant === 'primary' ? (
                <Button
                    onClick={() => open()}
                    disabled={!ready}
                    className='plaidlink-primary'
                >
                    Connect bank
                </Button>
            ) : variant === 'ghost' ? (
                <Button onClick={() => open()} variant="ghost" className="plaidlink-ghost">
                    <Image
                        src="/icons/connect-bank.svg"
                        alt="connect bank"
                        width={24}
                        height={24}
                    />
                    <p className='hiddenl text-[16px] font-semibold text-black-2 xl:block'>Connect bank</p>
                </Button>
            ) : (
                <Button onClick={() => open()} className='plaidlink-default'>
                    <Image
                        src="/icons/connect-bank.svg"
                        alt="connect bank"
                        width={24}
                        height={24}
                    />
                    <p className='text-[16px] font-semibold text-black-2'>Connect bank</p>
                </Button>
            )
            }
        </>
    )
}

export default PlaidLink