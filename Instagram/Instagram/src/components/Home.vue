<script setup>


</script>

<template>

<div class="content">
    <div class="content-card axt_content_id" >
      <div class="section-one">
        <div class="profile-img">
          <img src="" alt="">
        </div>
        <div class="profile-name">
          <a href="">Farlan Fadillah
            &middot;<span class="time-post">12 June 2024</span></a>
        </div>
        <div class="options">
          <!-- {% if content.user == request.user %} -->
          <a class="my-content-option"><i class="fa-solid fa-ellipsis"></i></a>
          <!-- {% else %}
          <a class="user-content-option" data-content="{{content.id}}"><i class="fa-solid fa-ellipsis"></i></a>
          {% endif %} -->
        </div>
      </div>
      <div class="section-two container-content_content_id">
        <!-- {% if content.content_type == 'image' %}
          {% if request.user in content.likes.all %} -->
        <img class="content-image pcontent_id" data-content="content_id" data-liked="true"
          src="../assets/posts/post1.jpeg" alt="">
          <!-- {% else %}
        <img class="content-image p{{content.id}}" data-content="{{content.id}}" data-liked="false"
          src="{{MEDIA_URL}}/media/{{content.content}}" alt="">
          {% endif %} -->
        <i class="fa-solid fa-heart i_content_id like-icon"></i>
        <!-- {% else %}
          {% if request.user in content.likes.all %}
        <video muted class="content-image p{{content.id}}" data-content="{{content.id}}" data-liked="true"
          preload="none" autoplay loop>
          <source src="{{MEDIA_URL}}/media/{{content.content}}" type="video/mp4">
        </video>
          {% else %}
        <video muted class="content-image p{{content.id}}" data-content="{{content.id}}" data-liked="false"
          preload="none" autoplay loop>
          <source src="{{MEDIA_URL}}/media/{{content.content}}" type="video/mp4">
        </video>
          {% endif %} -->
        <i class="fa-solid fa-heart i_content_id like-icon"></i>
        <!-- <i class="fa-sharp fa-solid fa-volume-xmark muted muted_content_id" data-content="content_id"></i> -->
        <!-- <i class="fa-sharp fa-solid fa-volume-high unmuted unmuted_content_id" data-content="content_id"></i> -->

        <!-- {% endif %} -->
      </div>
      <div class="section-three">
        <ul>
          <!-- {% if request.user in content.likes.all %} -->
          <li><a class="heart icon_content_id" onclick="like('content_id')"><i style="color: rgb(243, 65, 65);"
                class="fa-solid fa-heart"></i></a></li>
          <!-- {% else %}
          <li><a class="heart icon{{content.id}}" onclick="like('{{content.id}}')"><i
                class="fa-regular fa-heart"></i></a></li>
          {% endif %} -->
          <!-- {% if content.allow_comment %} -->
          <li class="comment-icon"><a onclick="openContent('#content_user_content_id')"><i class="fa-regular fa-comment"></i></a></li>
          <!-- {% else %}
          <li class="comment-icon display-none"><a onclick="openContent('#{{content.user}}{{content.id}}')"><i class="fa-regular fa-comment"></i></a></li>
          {% endif %} -->
          <li><a href=""><i class="fa-regular fa-paper-plane"></i></a></li>
          <li class="collections-hover-btn">
            <a><i class="fa-sharp fa-regular fa-bookmark"></i></a>
            <div class="saved-list-card">
              <div class="head">
                <span>Collections</span>
                <span><i class="fa-solid fa-plus" data-content="content_id"></i></span>
              </div>
              <!-- <div class="saved-list">
                {% for saved in request.user.saved_to_user.all %}
                <div class="saved-list__item" data-savedid="{{saved.id}}" data-content="{{content.id}}">
                  <div class="image">
                    {% if saved.contents.first.content_type == 'image' %}
                    <img src="{{saved.contents.first.content.url}}" alt="">
                    {% endif %}
                  </div>
                  <div class="collection-name">
                    {% if content in saved.contents.all %}
                    <span class="txt-bold"> {{saved.name}} </span>
                    {% else %}
                    <span> {{saved.name}} </span>
                    {% endif %}
                  </div>
                </div>
                {% endfor %}
              </div> -->
            </div>
          </li>
        </ul>
      </div>
      <div class="section-four">
        <!-- {% if content.show_like_count %} -->
        <a class="like-count-home a_content_id">10 likes</a>
        <!-- {% else %}
        <a class="like-count-home a{{content.id}} display-none">{{content.likes_count}} likes</a>
        {% endif %} -->
        <p><b>Farlan Fadillah </b> fuck this shit</p>
        <!-- {% if content.comments_count %} -->
        <a onclick="openContent('#content_user_content_id')">View all 100 comments</a>
        <!-- {% else %}
        {% endif %} -->

        <!-- {% if content.allow_comment %} -->
          <input data-content="content_id" id="text-comment_content_id" class='text-comment' type="text"
            placeholder="Add a comment...">
        <!-- {% else %}
          <input data-content="{{content.id}}" id="text-comment{{content.id}}" class='text-comment display-none' type="text"
            placeholder="Add a comment...">
        {% endif %} -->

      </div>

    </div>

    <div class="content-card axt_content_id" >
      <div class="section-one">
        <div class="profile-img">
          <img src="../assets/profile/default.jpg" alt="">
          <input type="checkbox" v-model="Login">
        </div>
        <div class="profile-name">
          <a href="">Farlan Fadillah
            &middot;<span class="time-post">12 June 2024</span></a>
        </div>
        <div class="options">
          <a class="my-content-option"><i class="fa-solid fa-ellipsis"></i></a>
        </div>
      </div>
      <div class="section-two container-content_content_id">
        <img class="content-image pcontent_id" data-content="content_id" data-liked="true"
          src="../assets/posts/post1.jpeg" alt="">
        <i class="fa-solid fa-heart i_content_id like-icon"></i>
        <i class="fa-solid fa-heart i_content_id like-icon"></i>
      </div>
      <div class="section-three">
        <ul>
          <li><a class="heart icon_content_id" onclick="like('content_id')"><i style="color: rgb(243, 65, 65);"
                class="fa-solid fa-heart"></i></a></li>
          <li class="comment-icon"><a onclick="openContent('#content_user_content_id')"><i class="fa-regular fa-comment"></i></a></li>
          <li><a href=""><i class="fa-regular fa-paper-plane"></i></a></li>
          <li class="collections-hover-btn">
            <a><i class="fa-sharp fa-regular fa-bookmark"></i></a>
            <div class="saved-list-card">
              <div class="head">
                <span>Collections</span>
                <span><i class="fa-solid fa-plus" data-content="content_id"></i></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="section-four">
        <a class="like-count-home a_content_id">10 likes</a>
        <p><b>Farlan Fadillah </b> this is where caption goes</p>
        <a onclick="openContent('#content_user_content_id')">View all 100 comments</a>
          <input data-content="content_id" id="text-comment_content_id" class='text-comment' type="text"
            placeholder="Add a comment...">
      </div>
    </div>
    <!-- {% endfor %} -->
  </div>

</template>

<style></style>