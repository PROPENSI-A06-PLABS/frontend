import  React , {useState } from 'react';

const FileInput = ({title, description}) => {
  return (
    <div className='inputReg'>
        <label class="block mb-2 text-sm font-medium text-black " for="file_input">{title}</label>
        <input class="block w-full text-xs text-black border border-gray-300 rounded-[5px] cursor-pointer bg-gray-50 focus:outline-none sm:max-w-[327px]" aria-describedby="file_input_help" id="file_input" type="file" />
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">{description}</p>
    </div>
    );
};

const DropFileInput = ({description}) => {
  return (
    <div class="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-primary border-dashed rounded-[5px] cursor-pointer bg-lightgrey hover:bg-gray-100 sm:max-w-[327px] sm:max-h-[200px]">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg aria-hidden="true" class="w-10 h-10 mb-3 textblack" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">{description}</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
    </div> 
    );
};

export {FileInput, DropFileInput};