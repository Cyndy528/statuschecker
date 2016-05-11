// Problem: We need a simple way to look at the http status check on multiple link from a web browser
// Solution: Use Node.js to perform the status check and server our templete via HTTP 

// 1. Create a web server

// 2. Handle HTTP route GET / and POST / ie. Home

	// PsuedoCode
	// if url === "/" && GET
		//show search field
	// if url === "/" && POST
		// redirect 

// 3. Handle HTTP route GET ie. url
	// if url === "/..."
		// get json from links
			//on 'end'
				// show status
			// on "error"
				// show the error

// 4. Function that handles the reading of files and merge in value
	// read from file and get a string
		// merge values into string

