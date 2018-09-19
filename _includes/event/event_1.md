<section class="bg-light" id="portfolio">
	<div class="container" id="first">
		<div class="row">
			<div class="col-lg-12 text-center">
				<h2 style="color: #fed136;" class="section-heading text-uppercase">Vientiane Tech Talks, First Meet Up</h2>
				<h3 class=" text-muted">Wenesday, 20th of June 2018</h3>
			</div>
		</div>
		<div class="col col-md-6 offset-md-3" >
			<hr>
		</div>
		<div class="row">
			<div class="col-lg-12 text-center">
				<h3 class="section-heading text-uppercase">Speakers</h3>
			</div>
		</div>
		<div class="row">
{% for speaker in site.data.speakers %}
<!-- A Changer En Fonction De L'Evenement -->
	{% if speaker.title == "first event" %} 
			<div class="col-md-3 col-sm-6 portfolio-item">
				<a class="portfolio-link" data-toggle="modal" href="#portfolioModal{{ speaker.number }}">
					<div class="portfolio-hover">
						<div class="portfolio-hover-content">
							<i class="fa fa-plus fa-3x"></i>
						</div>
					</div>
					<img class="img-fluid" src="assets/img/speakers/{{ speaker.img }}" alt="assets/img/speakers/{{ speaker.alt }}">
				</a>
				<div class="portfolio-caption">
					<h4> {{ speaker.title }} </h4>
					<p class="text-muted">{{ speaker.subtitle }}</p>
				</div>
			</div>
	{% endif %}
{% endfor %}
		</div>
		<div class="col col-md-6 offset-md-3" >
			<hr>
		</div>
		<div class="row">
			<div class="col-lg-12 text-center">
				<h3 class="section-heading text-uppercase">Sponsors</h3>
			</div>
		</div>
		<div class="row">
{% for sponsor in site.data.sponsors %}
<!-- A Changer En Fonction De L'Evenement -->
	{% if sponsor.title == "first event" %}
			<div class="col">
				<a style="text-align: center;" href="{{ sponsor.website }}">
		{% if sponsor.logo %}
					<img class="img-fluid d-block mx-auto" src="assets/img/logos/{{ sponsor.logo }}" alt="{{ sponsor.alt }}">
		{% else sponsor.logo %}
					<h2 style="font-family: 'Kaushan Script','Helvetica Neue',Helvetica,Arial,cursive">{{ sponsor.name }}</h2>
		{% endif %}
				</a>
			</div>
	{% endif %}
{% endfor %}
		</div>
	</div>
	<hr>
</section>