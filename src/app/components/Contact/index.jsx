export default function Index(){
    return(
        <div className="flex flex-col justify-between col-span-2 bg-white border rounded-xl border-grey-8" id="contact" data-aos="zoom-in" data-aos-duration="500">
        <div className="flex flex-col border-b border-grey-10 p-[24px] " >
              <div className="flex flex-col items-center justify-center border rounded-lg w-14 h-14 bg-[#f6f6f6] border-grey-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
<path d="M7.5 2.75C7.5 2.33579 7.16421 2 6.75 2C6.33579 2 6 2.33579 6 2.75V5.75C6 6.64648 6.67409 7.38552 7.54305 7.48789L6.52732 9.99292C6.11943 10.9988 6.16369 12.1753 6.64554 13.1355L10.6354 21.0866C10.9193 21.6524 11.4386 22 12 22C12.5614 22 13.0807 21.6524 13.3646 21.0866L17.3545 13.1355C17.8363 12.1753 17.8806 10.9988 17.4727 9.99292L16.4569 7.48789C17.3259 7.38552 18 6.64648 18 5.75V2.75C18 2.33579 17.6642 2 17.25 2C16.8358 2 16.5 2.33579 16.5 2.75V5.75C16.5 5.88807 16.3881 6 16.25 6H7.75C7.61193 6 7.5 5.88807 7.5 5.75V2.75ZM14.8432 7.5L16.0826 10.5566C16.3302 11.1672 16.2997 11.8929 16.0138 12.4628L12.75 18.9669V12.2993C13.1984 12.04 13.5 11.5552 13.5 11C13.5 10.1716 12.8284 9.5 12 9.5C11.1716 9.5 10.5 10.1716 10.5 11C10.5 11.5552 10.8016 12.04 11.25 12.2993V18.9669L7.98622 12.4628C7.70026 11.8929 7.66979 11.1672 7.91739 10.5566L9.15676 7.5H14.8432Z" fill="#8E8E92"/>
<script xmlns=""/></svg>
                  
              </div>
              <div className="mt-[48px] max-w-md">
              <h2 className="text-[24px] font-medium">Contact</h2>
              <p className="block [margin-block-start:1em] [margin-block-end: 1em] ms-0 me-0 text-grey-60 text-[14px]">Have a question, feedback or simply want to say hello? I would love to hear from you. Your communication is important to me!</p>
              </div>
          </div>
          <div className="p-[24px]">
            <form className="grid w-full grid-cols-1 gap-y-4">
                <div>
                    <label htmlFor="name" />
                    <input type="text" className="h-[48px] bg-secondary text-dark hover:border-grey-10 placeholder:text-grey-50 focus:outline-none px-[24px] w-full border border-grey-8 rounded-lg py-[14px]" placeholder="Name" />
                </div>
                <div>
                    <label htmlFor="email" />
                    <input type="text" className="h-[48px] bg-secondary text-dark hover:border-grey-10 placeholder:text-grey-50 focus:outline-none px-[24px] w-full border border-grey-8 rounded-lg py-[14px]" placeholder="Email" />
                </div>
                <div>
                    <label htmlFor="message" />
                    <textarea type="textarea" rows={8}  className=" bg-secondary text-dark hover:border-grey-10 placeholder:text-grey-50 focus:outline-none px-[24px] w-full border border-grey-8 rounded-lg py-[14px]" placeholder="Message" ></textarea>
                </div>
                <div>
                <button className="px-[16px] flex items-center gap-x-2 py-[10px] bg-dark hover:bg-grey-90 rounded-xl text-white capitalize transition duration-200">
                    <span>Send a Message</span>
                    </button>
                </div>
                
            </form>
          </div>

            

        </div>
    )
}