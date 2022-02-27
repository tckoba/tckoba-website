<template>
    <div class="article">
        <div class="article-inner">
            <div class="article-image-wrap">
                <img src="article.src" class="image"/>
            </div>
            <div class="article-detail">
                <h2>{{article.title}}</h2>
                <p>{{article.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'article',
    props: ['article']
}
</script>

<style>
    .article {
        /* flex: 1 1 33.333%; */
        width: 100%;
        padding:25px;
    }

    .article-inner{
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0,0,0,0.25);
        perspective: 1000px;
    }

    .article-image-wrap .image{
        width: 100%;
        filter: drop-shadow(0px 0px 12px rgba(0,0,0,0.25))
    }

    

</style>

