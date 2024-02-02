```mermaid
    sequenceDiagram
    participant browser
    participant server

    Note right of browser: creates a new element of array for notes
    Note right of browser: rerenders the notes to display
    
    browser->>server: POST /exampleapp/new_note_spa
    activate server

    server-->>browser: 201 Created with json body {message:"note created"}
    deactivate server
```