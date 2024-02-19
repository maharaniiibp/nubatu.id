import React, { useCallback, useState, useEffect } from "react";
import "../../css/konten/textEditor.css";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Text from "@tiptap/extension-text";
import Underline from "@tiptap/extension-underline";
import Document from "@tiptap/extension-document";
import { IoUnlinkOutline } from "react-icons/io5";
import { DropdownButton, Dropdown } from "react-bootstrap";

const MenuBar = () => {
  const [selectedItem, setSelectedItem] = useState("Heading 1"); // State untuk menyimpan item yang dipilih
  const [dropdownActive, setDropdownActive] = useState(false); // State untuk mengatur visibilitas dropdown
  const { editor } = useCurrentEditor();

  const handleToggleHeading = useCallback(
    (level, itemText) => {
      editor.chain().focus().toggleHeading({ level }).run();
      setSelectedItem(itemText); // Set item yang dipilih
      setDropdownActive(false); // Tutup dropdown setelah item dipilih
    },
    [editor]
  );

  const handleSetParagraph = () => {
    editor.chain().focus().setParagraph().run();
    setSelectedItem("Paragraph");
    setDropdownActive(false);
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive); // Toggle visibilitas dropdown
  };
  // const { editor } = useCurrentEditor();

  // const { editor } = useCurrentEditor();
  const handleToggleLink = useCallback(() => {
    const selection = window.getSelection(); // Dapatkan seleksi teks dari DOM
    if (!selection || selection.isCollapsed) return;

    const range = selection.getRangeAt(0); // Dapatkan rentang seleksi

    const selectedText = range.toString(); // Dapatkan teks yang dipilih
    const selectedNode = range.commonAncestorContainer; // Dapatkan node yang memuat teks yang dipilih

    // Jika teks yang dipilih ada dalam editor dan memiliki status tautan, lepaskan tautannya
    if (selectedNode.parentElement?.tagName === 'A') {
      editor.chain().focus().unsetLink().run();
    } else {
      // Jika tidak, buat tautan baru
      const url = window.prompt("Enter URL");
      if (url) {
        editor.chain().focus().setLink({ href: url }).run();
      }
    }
  }, [editor]);

  // const setLink = useCallback(() => {
  //   const previousUrl = editor.getAttributes("link").href;
  //   const url = window.prompt("URL", previousUrl);

  //   cancelled
  //   if (url === null) {
  //     return;
  //   }

  //   empty
  //   if (url === "") {
  //     editor.chain().focus().extendMarkRange("link").unsetLink().run();

  //     return;
  //   }

  //   update link
  //   editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  // }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <>
      {/* <div className="textEditor"> */}
      <div className="toolbar">
        {" "}
        <DropdownButton
          id="dropdown-basic-button"
          title={selectedItem} // Set judul dropdown button sesuai dengan item yang dipilih
          show={dropdownActive} // Set visibilitas dropdown berdasarkan state
          onClick={toggleDropdown} // Toggle dropdown saat diklik
        >
          <Dropdown.Item onClick={() => handleToggleHeading(1, "Heading 1")}>
            Heading 1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleToggleHeading(2, "Heading 2")}>
            Heading 2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleToggleHeading(3, "Heading 3")}>
            Heading 3
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleToggleHeading(4, "Heading 4")}>
            Heading 4
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleToggleHeading(5, "Heading 5")}>
            Heading 5
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleToggleHeading(6, "Heading 6")}>
            Heading 6
          </Dropdown.Item>
          <Dropdown.Item onClick={handleSetParagraph}>Paragraph</Dropdown.Item>
        </DropdownButton>
        <div className="editorGroup">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={`awal ${editor.isActive("bold") ? "is-active" : ""}`}
          >
            <img src="./konten/bold.svg" alt="" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={`tengah ${editor.isActive("italic") ? "is-active" : ""}`}
          >
            <img src="./konten/italic.svg" alt="" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`akhir ${
              editor.isActive("underline") ? "is-active" : ""
            }`}
          >
            <img src="./konten/underline.svg" alt="" />
          </button>
        </div>
        <div className="editorGroup">
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={`awal ${
              editor.isActive({ textAlign: "left" }) ? "is-active" : ""
            }`}
          >
            <img src="./konten/textLeft.svg" alt="" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={`tengah ${
              editor.isActive({ textAlign: "center" }) ? "is-active" : ""
            }`}
          >
            <img src="./konten/textCenter.svg" alt="" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={`akhir ${
              editor.isActive({ textAlign: "right" }) ? "is-active" : ""
            }`}
          >
            <img src="./konten/textRight.svg" alt="" />
          </button>
        </div>
        <div className="editorGroup">
          <button onClick={handleToggleLink} className="link">
        {editor.isActive("link") ? <IoUnlinkOutline /> : <img src="./konten/link.svg" alt="" />}
      </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`akhir ${
              editor.isActive("blockquote") ? "is-active" : ""
            }`}
          >
            <img src="./konten/quote.svg" alt="" />
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  Text,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Link.configure({
    openOnClick: false,
    autolink: true,
  }),
  Underline,
  Document,
];

const content = ``;

const TextEditor = () => {
  return (
    <>
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
        placeholder="Tulis di sini..."
      >
      </EditorProvider>
    </>
  );
};
export default TextEditor;
