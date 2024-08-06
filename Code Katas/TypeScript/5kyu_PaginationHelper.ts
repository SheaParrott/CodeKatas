// 5 kyu PaginationHelper

// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// let helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4)
// helper.pageCount() // should == 2
// helper.itemCount() // should == 6
// helper.pageItemCount(0) // should == 4
// helper.pageItemCount(1) // last page - should == 2
// helper.pageItemCount(2) // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5) // should == 1 (zero based index)
// helper.pageIndex(2) // should == 0
// helper.pageIndex(20) // should == -1
// helper.pageIndex(-10) // should == -1

export class PaginationHelper {
    collection: any[];
    itemsPerPage: number;
  
    constructor(collection: any[], itemsPerPage: number) { // The constructor takes in an array of items and a integer indicating how many items fit within a single page
        this.collection = collection
        this.itemsPerPage = itemsPerPage
    }

    itemCount(): number { // returns the number of items within the entire collection
        return this.collection.length
    }

    pageCount(): number { // returns the number of pages
        return Math.ceil(this.collection.length / this.itemsPerPage)
    }

    pageItemCount(pageIndex: number): number { // returns the number of items on the current page. page_index is zero based. this method should return -1 for pageIndex values that are out of range
        if (pageIndex < 0) { // guard to prevent negative indexes from being passed in. Assuming we should return -1 in this case given pageIndex values that are out of range
            return -1
        }

        let endIndex: number = (pageIndex + 1) * this.itemsPerPage
        let startIndex = (endIndex - this.itemsPerPage) > 0 ? endIndex - this.itemsPerPage : 0

        if (this.collection.length - 1 < startIndex) { // pageIndex values that are out of range
            return - 1
        }

        return this.collection.slice(startIndex, endIndex).length
    }

    pageIndex(itemIndex: any): number { // determines what page an item is on. Zero based indexes this method should return -1 for itemIndex values that are out of range
        if (itemIndex + 1 > this.collection.length || itemIndex < 0) { // if item is out of range or a negative indexes from being passed in then return -1 for itemIndex values that are out of range
            return - 1
        }
        
        return Math.ceil((itemIndex + 1) / this.itemsPerPage - 1)
    }
}


// here is the best practice / clever solution

export class PaginationHelperAgain {
	constructor(private collection: any[], private itemsPerPage: number) {}
  
	itemCount(): number {
    return this.collection.length;
	}
  
	pageCount(): number {
    return Math.ceil(this.collection.length / this.itemsPerPage); 
	}
  
	pageItemCount(pageIndex: number): number {
	  return pageIndex >= 0 && pageIndex < this.pageCount() ? this.collection.slice(pageIndex * this.itemsPerPage, (pageIndex + 1) * this.itemsPerPage).length : -1
	}
  
	pageIndex(itemIndex: number): number {
    return itemIndex >= 0 && itemIndex < this.itemCount() ? Math.floor(itemIndex / this.itemsPerPage) : -1;
	}
}