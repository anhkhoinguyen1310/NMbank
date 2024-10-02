import React from 'react'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from './ui/input';
import { z } from 'zod';

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    name: z.string().min(4, "Transfer note is too short"),
    amount: z.string().min(4, "Amount is too short"),
    senderBank: z.string().min(4, "Please select a valid bank account"),
    sharableId: z.string().min(8, "Please select a valid sharable Id"),
});


const CustomTransferForm = () => {
    return (
        <FormField
            control={formSchema}
            name="sharableId"
            render={({ field }) => (
                <FormItem className="border-t border-gray-200">
                    <div className="payment-transfer_form-item pb-5 pt-6">
                        <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                            Receiver&apos;s Plaid Sharable Id
                        </FormLabel>
                        <div className="flex w-full flex-col">
                            <FormControl>
                                <Input
                                    placeholder="Enter the public account number"
                                    className="input-class"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-12 text-red-500" />
                        </div>
                    </div>
                </FormItem>
            )}
        />
    )
}

export default CustomTransferForm