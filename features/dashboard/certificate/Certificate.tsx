/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from "react";
import "./style.css";
import { useReactToPrint } from "react-to-print";
import Image from "next/image";
import { UserInfoPayload } from "@/types/userInfo";
import { courseType } from "@/features/courses/types/course";
import { toNormalDate } from "@/helper/toNormalDate";

const Certificate = ({
  user,
  course,
  id,
}: {
  user: UserInfoPayload;
  course: courseType;
  id: string;
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef: certificateRef });

  const faDate = toNormalDate("fa", course.created_at);
  const enDate = toNormalDate("en", course.created_at);

  return (
    <>
      <button onClick={reactToPrintFn}>Print</button>
      <div
        style={{
          width: "62.5rem", // w-250
          backgroundColor: "#ffffff",
          borderWidth: "10px",
          borderStyle: "double",
          borderColor: "#4b5563",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
          overflow: "hidden",
        }}
        ref={certificateRef}
        id="certificate"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "2.5rem", width: "100%" }}>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="/images/cert/certificateheader.jpg"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Body */}
          <div
            style={{
              width: "100%",
              color: "#2e3b67",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {/* English */}
            <div
              style={{
                width: "49%",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                direction: "ltr",
                fontFamily: "Arial",
              }}
            >
              <p>it is to certify that</p>
              <p style={{ fontSize: "1.875rem", fontFamily: "brush" }}>
                {user.first_name_en} {user.last_name_en}
              </p>
              <p>national code {user.national_code}</p>
              <p>{user.company_name_en}</p>
              <p>
                has successfully completed {course.duration} hours training
                course on:
              </p>
              <p style={{ fontSize: "1.5rem", color: "#ef4444" }}>
                “{course.title_en}”
              </p>
              <p>held on {enDate}</p>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "17.5rem",
                width: "0.25rem",
                backgroundColor: "#000000",
                margin: "0 1.25rem",
              }}
            ></div>

            {/* Persian */}
            <div
              style={{
                width: "49%",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                fontSize: "1.25rem",
                fontFamily: "mitra",
              }}
            >
              <p>بدینوسیله گواهی میشود</p>
              <p style={{ fontSize: "1.25rem" }}>
                {user.first_name} {user.last_name}
              </p>
              <p>با کد ملی {user.national_code}</p>
              <p>از شرکت {user.company_name}</p>
              <p>دوره آموزشی:</p>
              <p style={{ fontSize: "1.5rem", color: "#ef4444" }}>
                «{course.title}»
              </p>
              <p>را به مدت ساعت در تاریخ {faDate}</p>
              <p>به پایان رسانیده است</p>
            </div>
          </div>

          {/* Signatures */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 1rem",
              width: "100%",
            }}
          >
            {/* Instructor */}
            <div
              style={{
                textAlign: "center",
                width: "33.333%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "mitra",
                  height: "10rem",
                  width: "10rem",
                  display: "flex",
                  position: "relative",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginBottom: "0.5rem",
                }}
              >
                <Image
                  src="/images/signs/allahverdiemza.jpg"
                  alt="امضا مدرس"
                  width={250}
                  height={250}
                  style={{
                    mixBlendMode: "multiply",
                    objectFit: "cover",
                    maxHeight: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "700",
                      color: "#4b5563",
                    }}
                  >
                    مدرس دوره
                  </p>
                  <p
                    style={{
                      fontWeight: "700",
                      fontSize: "1.125rem",
                      color: "#1f2937",
                    }}
                  >
                    {course.teacher}
                  </p>
                </div>
              </div>
            </div>

            {/* Manager Stamp */}
            <div
              style={{
                textAlign: "center",
                width: "33.333%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "15rem",
                  width: "20rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.5rem",
                  position: "relative",
                }}
              >
                <img
                  src={`/images/courses/signs/${course.sign_href}.jpg`}
                  alt="امضا مدیر"
                  style={{
                    mixBlendMode: "multiply",
                    objectFit: "contain",
                    maxHeight: "100%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              textAlign: "center",
              fontFamily: "mitra",
              borderTop: "1px solid #d1d5db",
              paddingTop: "1rem",
            }}
          >
            <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
              شماره گواهینامه:{" "}
              <span
                style={{
                  direction: "rtl",
                  display: "inline-block",
                  fontWeight: "700",
                }}
              >
                ف {id} / {course.id.split("-")[0]}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
