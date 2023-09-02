import React from "react";

function ErrorPage() {
  return (
    <div className="w-full h-screen text-slate-50 bg-slate-800 grid place-items-center ">
      <div className="p-6 max-w-4xl rounded-md relative backdrop-blur-sm bg-slate-50/30 ">
        <h1 className="md:text-6xl text-4xl tracking-widest font-bold mb-3  ">
          <span className=" text-red-600">Error:</span> Page not Found!!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          nostrum accusamus minus, delectus id dolorem quo harum consequuntur,
          fuga tempora dignissimos assumenda sit aut excepturi eaque veniam
          omnis totam culpa alias. Voluptatem, minima, odit facere hic ipsa sit
          architecto assumenda error fuga fugit reiciendis nulla, voluptas
          deserunt. Distinctio dolorum, eius adipisci a, vitae vel error odio
          libero doloribus porro dolor similique nisi suscipit molestiae quasi
          reprehenderit, soluta quam explicabo hic! Delectus, mollitia. Commodi
          molestiae hic voluptas laboriosam tempore voluptatem quam.
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
