import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import DefaultLayout from '../../layout/DefaultLayout';
import userThree from '../../images/user/user-03.png';
import BlogImg from '../../assets/blog.jpg';
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QA = () => {

  const [question, setQuestion] = useState();
  const [ans, setAns] = useState();

//  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !ans) {
      toast.error("Please fill in all the fields..");
      return;
    } else {
      axios
        .post("http://localhost:3050/admin/add-qas", {
          question,
          ans,
        })
        .then((result) => {
          console.log(result);
          navigate("/forms/qa");
        })
        .catch((err) => {
          console.log(err);
        });
      toast("Request submitted Successfully..");
    }
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Question-Answer Posting" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add Q&A
              </h3>
            </div>
            <form action="/admin/qas"
                  method="POST"
                  onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full ">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Question Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => setQuestion(e.target.value)}

                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Answer
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your content..."
                    onChange={(e) => setAns(e.target.value)}

                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <img 
          src={BlogImg}/>
        </div>
          
      </div>
    </DefaultLayout>
  );
};

export default QA;
