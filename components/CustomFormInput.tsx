import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils';

const formSchema = authFormSchema('sign-up')
interface CustomFormInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}

const CustomFormInput = ({ control, name, label, placeholder }: CustomFormInput) => {
    return (
        < FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label'>
                        {label}
                    </FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                className="input-class"
                                {...field}
                                type={name === 'password' ? 'password' : 'text'}

                            />
                        </FormControl>
                        <FormMessage className="form-message" />
                    </div>
                </div>

            )}
        />
    )
}

export default CustomFormInput