import React, { useState } from "react";
import "./Syllabus.css";

const Syllabus = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const syllabus = [
    {
      title: "Introduction",
      topics: ["Getting Started", "Installation", "Hello, World!", "Hello, Cargo!"],
    },
    {
      title: "Common Programming Concepts",
      topics: ["Variables", "Mutability", "Data Types", "Functions", "Comments", "Control Flow"],
    },
    {
      title: "Understanding Ownership",
      topics: ["What is Ownership?", "References and Borrowing", "The Slice Type"],
    },
    {
      title: "Using Structs to Structure Related Data",
      topics: [
        "Defining and Instantiating Structs",
        "An Example Program Using Structs",
        "Method Syntax",
      ],
    },
    {
      title: "Enums and Pattern Matching",
      topics: [
        "Defining an Enum",
        "The match Control Flow Construct",
        "Concise Control Flow with if let",
      ],
    },
    {
      title: "Managing Growing Projects with Packages, Crates, and Modules",
      topics: [
        "Packages and Crates",
        "Defining Modules to Control Scope and Privacy",
        "Paths for Referring to an Item in the Module Tree",
        "Bringing Paths Into Scope with the use Keyword",
        "Separating Modules into Different Files",
      ],
    },
    {
      title: "Common Collections",
      topics: [
        "Storing Lists of Values with Vectors",
        "Storing UTF-8 Encoded Text with Strings",
      ],
    },
    {
      title: "Error Handling",
      topics: [
        "Unrecoverable Errors with panic!",
        "Recoverable Errors with Result",
        "To panic! or Not to panic!",
        "Storing Keys with Associated Values in Hash Maps",
      ],
    },
    {
      title: "Generic Types, Traits, and Lifetimes",
      topics: [
        "Generic Data Types",
        "Traits: Defining Shared Behavior",
        "Validating References with Lifetimes",
      ],
    },
    {
      title: "Writing Automated Tests",
      topics: [
        "How to Write Tests",
        "Controlling How Tests Are Run",
        "Test Organization",
      ],
    },
    {
      title: "An I/O Project: Building a Command Line Program",
      topics: [
        "Accepting Command Line Arguments",
        "Reading a File",
        "Refactoring to Improve Modularity and Error Handling",
        "Developing the Library's Functionality with Test Driven Development",
        "Working with Environment Variables",
        "Writing Error Messages to Standard Error Instead of Standard Output",
      ],
    },
    {
      title: "Functional Language Features: Iterators and Closures",
      topics: [
        "Closures: Anonymous Functions that Capture Their Environment",
        "Processing a Series of Items with Iterators",
        "Improving Our I/O Project",
        "Comparing Performance: Loops vs. Iterators",
      ],
    },
    {
      title: "More about Cargo and Crates.io",
      topics: [
        "Customizing Builds with Release Profiles",
        "Publishing a Crate to Crates.io",
        "Cargo Workspaces",
        "Installing Binaries from Crates.io with cargo install",
        "Extending Cargo with Custom Commands",
      ],
    },
    {
      title: "Smart Pointers",
      topics: [
        "Using Box to Point to Data on the Heap",
        "Treating Smart Pointers Like Regular References with the Deref Trait",
        "Running Code on Cleanup with the Drop Trait",
        "Rc, the Reference Counted Smart Pointer",
        "RefCell and the Interior Mutability Pattern",
        "Reference Cycles Can Leak Memory",
      ],
    },
    {
      title: "Fearless Concurrency",
      topics: [
        "Using Threads to Run Code Simultaneously",
        "Using Message Passing to Transfer Data Between Threads",
        "Shared-State Concurrency",
        "Extensible Concurrency with the Sync and Send Traits",
      ],
    },
    {
      title: "Object Oriented Programming Features of Rust",
      topics: [
        "Characteristics of Object-Oriented Languages",
        "Using Trait Objects That Allow for Values of Different Types",
        "Implementing an Object-Oriented Design Pattern",
      ],
    },
    {
      title: "Advanced Features",
      topics: [
        "Unsafe Rust",
        "Advanced Traits",
        "Advanced types",
        "Advanced Function and Closures",
        "Macros",
      ],
    },
    {
      title: "Final Project: Building a Multithreaded Web Server",
      topics: [
        "Building a Single-Threaded Web Server",
        "Turning Our Single-Threaded Server into a Multithreaded Server",
         "Graceful Shutdown and Cleanup",
      ],
    },
  ];

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAll = (expand) => {
    const allExpanded = syllabus.reduce((acc, _, index) => {
      acc[index] = expand;
      return acc;
    }, {});
    setExpandedSections(allExpanded);
  };
  return (
    <div className="syllabus-container">
      <div className="syllabus-header">
        <h3>Syllabus</h3>
      </div>
      <hr />
      {syllabus.map((section, index) => (
        <div key={index} className="syllabus-section">
          <div className="syllabus-title" onClick={() => toggleSection(index)}>
            <span>{section.title}</span>
            <span>{expandedSections[index] ? "▲" : "▼"}</span>
          </div>
          {expandedSections[index] && section.topics.length > 0 && (
            <ul className="syllabus-topics">
              {section.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Syllabus;
