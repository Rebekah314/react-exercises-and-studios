import classes from './BookList.module.css';


export default function BookList() {
   let pageTitle = "Books I Want to Read";
   let book1 = "http://embed.cdn.pais.scholastic.com/v1/products/identifiers/isbn/9780439358064/primary/renditions/600?useMissingImage=true";
   let book2 = "http://embed.cdn.pais.scholastic.com/v1/products/identifiers/isbn/9780439784542/primary/renditions/600?useMissingImage=true";
   let book3 = "http://embed.cdn.pais.scholastic.com/v1/products/identifiers/isbn/9780545010221/primary/renditions/600?useMissingImage=true";

   return (
      <div>
         <h3 className = {classes.bookHeading}>{pageTitle}</h3>
         <img src={book1} alt="Harry Potter Book 5 cover image" />
         <img src={book2} alt="Harry Potter Book 6 cover image" />
         <img src={book3} alt="Harry Potter Book 7 cover image" />
          

      </div>      
   );
}