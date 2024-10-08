export default function basicOps(products,searchTerm,sortDir,currCategory,pageNum,pageSize){

    //searching
let filteredArr = products;
  if (searchTerm !== '') {
    filteredArr = filteredArr.filter((product) => {
      let lowerSearchTerm = searchTerm.toLowerCase();
      let lowerTitle = product.title.toLowerCase();
      return lowerTitle.includes(lowerSearchTerm);
    });
  }

  // Filter data based on price sorting
  let sortFilteredArr = filteredArr;
  if (sortDir !== 0) {
    sortFilteredArr = sortDir === 1 ? sortFilteredArr.sort(inComparator) : sortFilteredArr.sort(decComparator);
  }

  // Filter data based on category
  let filterCategoryArr = sortFilteredArr;
  if (currCategory !== 'All Categories') {
    filterCategoryArr = filterCategoryArr.filter((product) => product.category === currCategory);
  }

  /* pageNum*/
  let totalPages=Math.ceil(filterCategoryArr.length/pageSize);
  let startIdx=(pageNum-1)*pageSize;
  let endIdx=pageSize+startIdx

  filterCategoryArr=filterCategoryArr.slice(startIdx,endIdx)
  
  return {filterCategoryArr,totalPages}
}
function inComparator(product1, product2) {
  return product1.price > product2.price ? 1 : -1;
}
function decComparator(product1, product2) {
  return product1.price < product2.price ? 1 : -1;
}