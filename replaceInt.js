//Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

const filterNumeric = s => {
	return s.split().filter(n => n != parseInt(n)).join()
}
