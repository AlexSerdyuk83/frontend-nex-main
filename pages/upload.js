import React, { useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { GoCloudUpload } from "react-icons/go";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0";
import { Loader } from "../components/Loader";
import styles from "../styles/Upload.module.css";
import Link from "next/link";

export default function Upload() {
  const { user, error, isLoading } = useUser();
  if (user) {
    let emailId = "";
    if(user.email) {
      emailId = user.email;
    }
    else {
      emailId = user.name;
    }
    const LoginData = {
      email: emailId,
      name: user.name,
      login_history: [
        {
          last_login: new Date().toString(),
        },
      ],
    };
    axios
      .post(
        `${process.env.NEXT_PUBLIC_LOCAL_SERVER_URL}/logins`,
        LoginData
      )
      .then((response) => {
        if (response.data.token)
          localStorage.setItem("auth", response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [captureData, setCaptureData] = useState({
    buffer: null,
    type: "",
    name: "",
  });
  const onDrop = (acceptedFiles, event) => {
    if (acceptedFiles.length > 0) {
      if (acceptedFiles[0].size >= 2000000)
        return alert("File too Large Max Upload Size: 2MB");
      setSelectedFiles(acceptedFiles);
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(acceptedFiles[0]);
      reader.onloadend = () => {
        setCaptureData({
          buffer: Buffer(reader.result),
          type: acceptedFiles[0].type,
          name: acceptedFiles[0].name,
        });
      };
      console.log("buffer", captureData);
    }
  };
  const { isDragActive } = useDropzone({ onDrop });

  const uploadFile = (acceptedFiles) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    console.log(JSON.stringify(user));
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "email": emailId
      },
    };
    axios
      .post(
        `${process.env.NEXT_PUBLIC_LOCAL_SERVER_URL}/files`,
        formData,
        config
      )
      .then((response) => {
        console.log(response);
        alert('Your file has been uploaded sucessfully')
        window.location.reload()
      })
      .catch((error) => {
        console.log(error);
        alert('Something went wrong')
        window.location.reload()
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!selectedFiles) return alert("No File Selected");
    // const description = this.fileDescription.value
    uploadFile(selectedFiles);
  }


  if (isLoading) {
    return <Loader />;
  }
  return user ? (
    <>
      <div>
        <h3 className="text-center p-3">Upload File</h3>
      </div>
      <div
        style={{ maxWidth: "75%" }}
        className="container-fluid mt-5 text-center border border-4 p-5 shadow-sm rounded-3"
      >
        <form>
          <Dropzone
            onDrop={(acceptedFiles, _, event) => onDrop(acceptedFiles, event)}
            multiple={false}
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                {/* <input type="file" onChange={captureFile} className="text-white text-monospace" /> */}

                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  {selectedFiles && (
                    <div className="selected-file">
                      {selectedFiles && selectedFiles[0].name}
                    </div>
                  )}
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <div>
                      <GoCloudUpload size={100} color="#09d3ac" />
                      <h3 style={{ color: "grey" }}>
                        Drag and drop your file here, or
                      </h3>
                      <Link href="">Browse File</Link>
                    </div>
                  )}
                </div>
              </section>
            )}
          </Dropzone>
        </form>
      </div>
      <aside className="selected-file-wrapper text-center">
        <button onClick={onSubmit} className="btn-primary mt-3 py-2 px-4 rounded-3">
          <div className="d-flex justify-content-center">
            <b>Upload</b>
          </div>
        </button>
      </aside>
    </>
  ) : (
    <div>
      <h2>You are not Authorize!! Please Login first</h2>
    </div>
  );
}
