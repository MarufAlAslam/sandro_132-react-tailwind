import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MailSent from "../mail-sent";
import { DatePicker } from "antd";
// import dayjs from "dayjs";

const CraftMail = () => {
  const [mailSent, setMailSent] = useState(false);
  const [emailBody, setEmailBody] = useState("");
  const [jour, setJour] = useState("");
//   const [mois, setMois] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setMailSent(true);

    const form = e.target;

    const hour = form.hour.value;
    const minute = form.minute.value;
    // const jour = form.jour.value
    // const mois = form.mois.value
    const timezone = form.timezone.value;
    const email = form.email.value;

    const data = {
      hour,
      minute,
      jour,
    //   mois,
      timezone,
      email,
      emailBody,
    };

    console.log(data);
  };

  const handleAgain = () => {
    setMailSent(false);
  };

  useEffect(() => {
    const numberOnly = document.querySelectorAll(".number-only");
    numberOnly.forEach((item) => {
      item.addEventListener("keydown", (e) => {
        if (
          e.keyCode === 8 ||
          e.keyCode === 9 ||
          e.keyCode === 37 ||
          e.keyCode === 39 ||
          e.keyCode === 46
        ) {
          return true;
        } else if (e.keyCode < 48 || e.keyCode > 57) {
          e.preventDefault();
        }
      });
    });
  }, []);

  // limit hour input 0-23
  useEffect(() => {
    const hour = document.querySelector(".hour");
    hour.addEventListener("keyup", (e) => {
      if (e.target.value > 23) {
        e.target.value = 23;
      }
    });
  }, []);
  // limit hour input 0-59
  useEffect(() => {
    const hour = document.querySelector(".min");
    hour.addEventListener("keyup", (e) => {
      if (e.target.value > 59) {
        e.target.value = 59;
      }
    });
  }, []);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setJour(dateString);
  };

//   const onChangeM = (date, dateString) => {
//     console.log(date, dateString);
//     setMois(dateString);
//   };

//   const disabledDate = (current) => {
//     // Can not select days before today and today
//     return current && current < dayjs().endOf("day");
//   };
  return (
    <div className="craft-mail pb-[30px]">
      <div className="container">
        <div className="card bg-black rounded-[12px] md:px-[45px] px-[15px] md:py-[30px] py-[15px]">
          <h2 className="text-[30px] medium text-white ">Craft your email</h2>

          <div className="line bg-white h-[1px] w-full my-5"></div>

          {mailSent ? (
            <MailSent handleAgain={handleAgain} />
          ) : (
            <form action="" onSubmit={handleSubmitForm}>
              <div className="flex mb-[35px] justify-start items-center flex-wrap gap-6">
                <div className="item">
                  <p className="md:text-xl text-sm text-white">Heure</p>
                  <div className="flex mt-2 justify-between items-center w-[145px]">
                    <input
                      type="text"
                      className="w-[60px] h-[60px] text-center text-white rounded-[3px] bg-[#111111] number-only hour placeholder:text-white md:text-xl text-sm"
                      placeholder="09"
                      name="hour"
                      id=""
                    />
                    <span className="text-white md:text-xl text-sm">:</span>
                    <input
                      type="text"
                      className="w-[60px] h-[60px] text-center text-white rounded-[3px] bg-[#111111] number-only min placeholder:text-white md:text-xl text-sm"
                      placeholder="00"
                      name="minute"
                      id=""
                    />
                  </div>
                </div>
                <div className="item">
                  <p className="md:text-xl text-sm text-white">Jour</p>
                  <div className="flex mt-2 justify-between items-center w-[180px]">
                    {/* <input type="text" className='w-full h-[60px] text-left px-[16px] text-white rounded-[3px] bg-[#111111] placeholder:text-white md:text-xl text-sm' placeholder='Monday' name="" id="" /> */}

                    {/* <select name="jour" className='w-full appearance-none h-[60px] text-left px-[16px] text-white rounded-[3px] bg-[#111111] placeholder:text-white md:text-xl text-sm' id="">
                                            <option value="Saturday">Saturday</option>
                                            <option value="Sunday">Sunday</option>
                                            <option value="Monday">Monday</option>
                                            <option value="Tuesday">Tuesday</option>
                                            <option value="Wednesday">Wednesday</option>
                                            <option value="Thursday">Thursday</option>
                                            <option value="Friday">Friday</option>
                                        </select> */}

                    <DatePicker
                      placeholder="Select Jour"
                      className="w-full appearance-none h-[60px] text-left px-[16px] rounded-[3px] bg-[#111111] placeholder:text-white md:text-xl text-sm border-none text-white"
                      onChange={onChange}
                    />
                  </div>
                </div>
                {/* <div className="item">
                  <p className="md:text-xl text-sm text-white">Mois</p>
                  <div className="flex mt-2 justify-between items-center w-[180px]">
                    <DatePicker
                      picker="month"
                      disabledDate={disabledDate}
                      placeholder="Select Mois"
                      className="w-full appearance-none h-[60px] text-left px-[16px] rounded-[3px] bg-[#111111] placeholder:text-white md:text-xl text-sm border-none text-white"
                      onChange={onChangeM}
                    />
                  </div>
                </div> */}
                <div className="item">
                  <p className="md:text-xl text-sm text-white">Time zone</p>
                  <div className="flex mt-2 justify-between items-center w-[350px] max-w-full">
                    <select
                      name="timezone"
                      className="w-full appearance-none h-[60px] text-left px-[16px] text-white rounded-[3px] bg-[#111111] placeholder:text-white md:text-xl text-sm"
                      id=""
                    >
                      <option value="-12:00">
                        (GMT -12:00) Eniwetok, Kwajalein
                      </option>
                      <option value="-11:00">
                        (GMT -11:00) Midway Island, Samoa
                      </option>
                      <option value="-10:00">(GMT -10:00) Hawaii</option>
                      <option value="-09:50">(GMT -9:30) Taiohae</option>
                      <option value="-09:00">(GMT -9:00) Alaska</option>
                      <option value="-08:00">
                        (GMT -8:00) Pacific Time (US &amp; Canada)
                      </option>
                      <option value="-07:00">
                        (GMT -7:00) Mountain Time (US &amp; Canada)
                      </option>
                      <option value="-06:00">
                        (GMT -6:00) Central Time (US &amp; Canada), Mexico City
                      </option>
                      <option value="-05:00">
                        (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
                      </option>
                      <option value="-04:50">(GMT -4:30) Caracas</option>
                      <option value="-04:00">
                        (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
                      </option>
                      <option value="-03:50">(GMT -3:30) Newfoundland</option>
                      <option value="-03:00">
                        (GMT -3:00) Brazil, Buenos Aires, Georgetown
                      </option>
                      <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
                      <option value="-01:00">
                        (GMT -1:00) Azores, Cape Verde Islands
                      </option>
                      <option value="+00:00" selected="selected">
                        (GMT) Western Europe Time, London, Lisbon, Casablanca
                      </option>
                      <option value="+01:00">
                        (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
                      </option>
                      <option value="+02:00">
                        (GMT +2:00) Kaliningrad, South Africa
                      </option>
                      <option value="+03:00">
                        (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
                      </option>
                      <option value="+03:50">(GMT +3:30) Tehran</option>
                      <option value="+04:00">
                        (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
                      </option>
                      <option value="+04:50">(GMT +4:30) Kabul</option>
                      <option value="+05:00">
                        (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
                      </option>
                      <option value="+05:50">
                        (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
                      </option>
                      <option value="+05:75">
                        (GMT +5:45) Kathmandu, Pokhara
                      </option>
                      <option value="+06:00">
                        (GMT +6:00) Almaty, Dhaka, Colombo
                      </option>
                      <option value="+06:50">
                        (GMT +6:30) Yangon, Mandalay
                      </option>
                      <option value="+07:00">
                        (GMT +7:00) Bangkok, Hanoi, Jakarta
                      </option>
                      <option value="+08:00">
                        (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
                      </option>
                      <option value="+08:75">(GMT +8:45) Eucla</option>
                      <option value="+09:00">
                        (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
                      </option>
                      <option value="+09:50">
                        (GMT +9:30) Adelaide, Darwin
                      </option>
                      <option value="+10:00">
                        (GMT +10:00) Eastern Australia, Guam, Vladivostok
                      </option>
                      <option value="+10:50">
                        (GMT +10:30) Lord Howe Island
                      </option>
                      <option value="+11:00">
                        (GMT +11:00) Magadan, Solomon Islands, New Caledonia
                      </option>
                      <option value="+11:50">
                        (GMT +11:30) Norfolk Island
                      </option>
                      <option value="+12:00">
                        (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
                      </option>
                      <option value="+12:75">
                        (GMT +12:45) Chatham Islands
                      </option>
                      <option value="+13:00">
                        (GMT +13:00) Apia, Nukualofa
                      </option>
                      <option value="+14:00">
                        (GMT +14:00) Line Islands, Tokelau
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="p-[20px] mb-[35px] bg-[#111111]">
                <CKEditor
                  editor={ClassicEditor}
                  // hide image upload tab
                  config={{
                    ckfinder: {
                      uploadUrl:
                        "/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json",
                    },
                    toolbar: {
                      items: [
                        "heading",
                        "|",
                        "bold",
                        "italic",
                        // 'link',
                        // 'bulletedList',
                        // 'numberedList',
                        // 'imageUpload',
                        // 'blockQuote',
                        // 'insertTable',
                        // 'mediaEmbed',
                        // 'undo',
                        // 'redo'
                      ],
                    },
                    language: "en",
                    image: {
                      toolbar: [
                        "imageTextAlternative",
                        "imageStyle:full",
                        "imageStyle:side",
                      ],
                    },
                    table: {
                      contentToolbar: [
                        "tableColumn",
                        "tableRow",
                        "mergeTableCells",
                      ],
                    },
                    licenseKey: "",
                  }}
                  className="bg-black"
                  data="<p>Hello from CKEditor 5!</p>"
                  onReady={(editor) => {
                    console.log(
                      "CKEditor5 React Component is ready to use!",
                      editor
                    );
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                    setEmailBody(data);
                  }}
                />
              </div>

              <div className="flex flex-wrap md:gap-0 gap-3 justify-between items-end">
                <div className="email lg:w-[40%] md:w-1/2 w-full">
                  <p className="md:text-xl text-sm text-white">Mois</p>
                  <div className="flex mt-2 justify-between items-center w-full">
                    <input
                      type="text"
                      className="w-full h-[60px] text-left px-[16px] text-white rounded-[3px] bg-[#111111] placeholder:text-white md:text-xl text-sm"
                      placeholder="Example@gmail.com"
                      name="email"
                      id=""
                    />
                  </div>
                </div>

                <button className="btn bg-[#FF6330] md:px-[40px] px-[20px] md:py-[20px] py-[10px] text-white rounded-[12px]">
                  Envoyer
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CraftMail;
