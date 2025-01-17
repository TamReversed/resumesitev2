import { languages } from "./schema/languages"

export default function Index(){
    const lang = "Proficiency in various languages allows for successful communication and collaboration in a variety of circumstances."
    return(
        <div className="flex flex-col justify-between col-span-2 bg-white border rounded-xl border-grey-8" data-aos="zoom-in" data-aos-duration="500">
        <div className="flex flex-col border-b border-grey-10 p-[24px] " >
              <div className="flex flex-col items-center justify-center border rounded-lg w-14 h-14 bg-[#f6f6f6] border-grey-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
<path d="M12 1.99896C17.5237 1.99896 22.0015 6.47681 22.0015 12.0005C22.0015 17.5242 17.5237 22.0021 12 22.0021C6.47629 22.0021 1.99844 17.5242 1.99844 12.0005C1.99844 6.47681 6.47629 1.99896 12 1.99896ZM14.9389 16.5003H9.06109C9.71313 18.9144 10.8465 20.5021 12 20.5021C13.1535 20.5021 14.2869 18.9144 14.9389 16.5003ZM7.5083 16.5008L4.78582 16.5007C5.74416 18.0337 7.1776 19.2393 8.87999 19.9113C8.35771 19.0915 7.92672 18.0652 7.60972 16.8958L7.5083 16.5008ZM19.2142 16.5007L16.4917 16.5008C16.1679 17.8346 15.7003 19.0004 15.1189 19.9114C16.7159 19.2813 18.0756 18.1824 19.029 16.7842L19.2142 16.5007ZM7.09342 9.99986H3.73581L3.73105 10.0171C3.57897 10.6534 3.49844 11.3176 3.49844 12.0005C3.49844 13.0567 3.69103 14.0678 4.04301 15.0008L7.21617 15.0005C7.07387 14.0514 6.99844 13.0431 6.99844 12.0005C6.99844 11.3165 7.03091 10.6473 7.09342 9.99986ZM15.3969 9.99993H8.60307C8.53505 10.6402 8.49844 11.3099 8.49844 12.0005C8.49844 13.06 8.58459 14.0703 8.73818 15.0006H15.2618C15.4154 14.0703 15.5015 13.06 15.5015 12.0005C15.5015 11.3099 15.4649 10.6402 15.3969 9.99993ZM20.2646 9.99903L16.9066 9.99988C16.9691 10.6473 17.0015 11.3165 17.0015 12.0005C17.0015 13.0431 16.9261 14.0514 16.7838 15.0005L19.957 15.0008C20.309 14.0678 20.5015 13.0567 20.5015 12.0005C20.5015 11.3111 20.4195 10.6409 20.2646 9.99903ZM8.88104 4.08967L8.85814 4.09838C6.81082 4.91309 5.15481 6.5004 4.25014 8.50027L7.29826 8.50063C7.61162 6.74784 8.15846 5.22192 8.88104 4.08967ZM12 3.49896L11.8843 3.50426C10.6189 3.62002 9.39642 5.62198 8.82871 8.50021H15.1713C14.6052 5.63005 13.3879 3.63125 12.1263 3.50528L12 3.49896ZM15.12 4.08972L15.2268 4.26382C15.896 5.37629 16.4042 6.83617 16.7017 8.50063L19.7498 8.50027C18.8852 6.58886 17.3342 5.05432 15.4112 4.211L15.12 4.08972Z" fill="#8E8E92"/>
<script xmlns=""/></svg>
                  
              </div>
              <div className="mt-[48px] max-w-md">
              <h2 className="text-[24px] font-medium">Languages</h2>
              <p className="block [margin-block-start:1em] [margin-block-end: 1em] ms-0 me-0 text-grey-60 text-[14px]">{lang}</p>
              </div>
          </div>
          <div className="flex flex-col gap-[32px] pt-[10px] px-[24px] pb-[40px]">
          <div className="flex flex-col divide-y divide-grey-8">
          {languages.map((item,i)=>{
                const {name,flag,level} = item;
                return(
                    <div key={i} className="flex flex-col gap-[6px] flex-1 py-6">
                        <h3 className="flex items-center gap-x-1 ">
                            <span>{flag}</span>
                            <span className="text-base font-medium">{name}</span>
                        </h3>
                        <p className="text-xs text-grey-60">{level}</p>
                        
                    </div>
                )
            })}
          </div>
            
          </div>

            

        </div>
    )
}