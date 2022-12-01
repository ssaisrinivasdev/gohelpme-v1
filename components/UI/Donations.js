import React from 'react'

function Donations({data}) {
    return(
        <div>
            <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md ">
                <div class="w-2 bg-color1 "></div>

                <div class="flex items-center px-2 py-3">
                    <img class="object-cover w-10 h-10 rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"/>

                    <div class="mx-3">
                        <p class="text-gray-600 ">{data?.donator_name} donated {data?.amount} $.</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Donations